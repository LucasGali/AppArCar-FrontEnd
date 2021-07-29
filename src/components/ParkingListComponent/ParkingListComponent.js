import React, { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import ReserveButton from '../Reserve/ReserveButton';
import './ParkingListComponent.css';
import text from 'utils/text';
import iconSet from '../../icons.json';
import IcomoonReact from 'icomoon-react';
import Mapbox from 'components/Mapbox/Mapbox';
import NoParking from 'components/NoParking/NoParking';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { parkingData } from '../../actions/index';
import { LOAD_PARKINGS } from '../../actions/types';
import { LoopCircleLoading } from 'react-loadingg';

const ParkingListComponent = ({ vehicleData, locationPoint }) => {
  const columnsData = [
    {
      Header: text.parkingTable.columns.name,
      accessor: 'name',
    },
    {
      Header: text.parkingTable.columns.address,
      accessor: 'address',
    },
    {
      Header: text.parkingTable.columns.attention,
      accessor: 'business_hours',
    },
    {
      Header: text.parkingTable.columns.price,
      accessor: 'price',
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => columnsData, []);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const dispatch = useDispatch();

  const tableInstance = useTable({
    columns,
    data,
  });

  const getData = async () => {
    try {     
      const headers = {
        Authorization: localStorage.jwt,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/parkings`,        
        { headers },
      );
      const toShow = response.data
        ?.filter((lot) => {
          const cleaner = (coordinates) => Number(coordinates?.toString()?.slice(0, 10));

          const latitude = locationPoint.coords?.latitude;
          const longitude = locationPoint.coords?.longitude;
          // 0.001° = 111 m mts to long & lat
          const meters = 0.01;
          if (
            lot.latitude < cleaner(latitude) + meters &&
            lot.latitude > cleaner(latitude) - meters &&
            lot.longitude < cleaner(longitude) + meters &&
            lot.longitude > cleaner(longitude) - meters
          )
            return lot;
          return undefined
        })
        ?.map(lot => {
          return {
              _id: lot._id,
              name: lot.name,
              address: lot.address,
              business_hours: lot.business_hours,
              price: lot.price[vehicleData.vehicleType],
            };
        });
      dispatch(parkingData(LOAD_PARKINGS, response.data));
      setData([...toShow]);
      setDataToShow([...toShow]);
      setTimeout(() => setSpinner(false), 1000);
    } catch (e) {
      console.error('Oopps!', e);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicleData]);

  const handleChange = (input) => {
    const filterItems = (element) => {
      const parkingName = element.name;
      const parkingAddress = element.address;
      const predicate = input.target.value?.toLowerCase();
      return (
        parkingName?.toLowerCase().includes(predicate) ||
        parkingAddress?.toLowerCase().includes(predicate)
      );
    };

    setSearch(input.target.value);
    if (input.target.value.length > 0) {
      let helper = dataToShow.filter(filterItems);
      setData([...helper]);
    } else {
      setData([...dataToShow]);
    }
  };

  const SearchIcon = () => (
    <IcomoonReact iconSet={iconSet} color='#444' size={20} icon='search' />
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  
  const Table = () => {
    return (<table
      id='parktab'
      className='table table-striped table-dark'
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={Math.random()} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td key={Math.random()} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
              <td>
                <ReserveButton selectedParking={row.original._id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
  };

  return (
    <>
      <div className='search-wrapper'>
        <i className='search-icon'>
          <SearchIcon />
        </i>
        <input
          type='text'
          className='form-control'
          placeholder={text.home.table.searchInput}
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className='home-map-wrapper'>
        <Mapbox />
      </div>
      {spinner ? (
        <div className='spinner'>
          <LoopCircleLoading />
        </div>
      ) : data.length === 0 ? (
        <NoParking />
      ) : (
        <Table />
      )}
    </>
  );
};

export default ParkingListComponent;
