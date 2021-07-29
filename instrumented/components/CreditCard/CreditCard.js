import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import { Card, Button } from 'react-bootstrap';
import text from 'utils/text';
import 'react-credit-cards/es/styles-compiled.css';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from '../../utils/card-utils';
import axios from 'axios';
import './CreditCard.css';

const CreditCard = ({ number, brand, expiry, storedUser }) => {
  const [exist, setExist] = useState(false);
  const [justRegister, setJustRegister] = useState(false);

  useEffect(() => {
    if (number || justRegister) setExist(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (justRegister) setExist(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [justRegister]);

  // Registration subComponent
  const Registration = () => {
    const [cardInfo, setCardInfo] = useState({
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    });

    function cardType(cardNumber) {
      // returns card type
      cardNumber = cardNumber.split(' ').join('');
      var o = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro:
          /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^(2|5)[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      };
      for (var k in o) {
        if (o[k].test(cardNumber)) {
          return k;
        }
      }
      return false;
    }

    const handleSubmit = async () => {
      let enterDate = cardInfo.expiry.split('/');
      enterDate[0] = Number(enterDate[0]);
      enterDate[1] = Number(enterDate[1]) + 2000;
      const thisMonth = new Date().getMonth() + 1;
      const thisYear = new Date().getFullYear();
      if (
        enterDate[0] >= 1 &&
        enterDate[0] <= 12 &&
        (enterDate[1] > thisYear ||
          (enterDate[1] === thisYear && enterDate[0] >= thisMonth))
      ) {
        if (
          cardType(cardInfo.number) &&
          cardInfo.name.length > 0 &&
          cardInfo.cvc.length >= 3
        ) {
          try {
            console.log(cardType(cardInfo.number));
            const headers = {
              Authorization: localStorage.jwt,
            };
            await axios.patch(
              `${process.env.REACT_APP_SERVER_URL}/card_registration`,
              {
                email: localStorage.getItem('email'),
                cardInfo: {
                  cvc: cardInfo.cvc,
                  expiry: cardInfo.expiry,
                  name: cardInfo.name,
                  number: cardInfo.number,
                  brand: cardType(cardInfo.number),
                },
              },
              { headers },
            );
            setJustRegister(true);
          } catch (e) {
            console.error('Opps!', e);
          }
        } else {
          alert(text.profile.invalid_data);
          setCardInfo({
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
          });
        }
      } else {
        alert(text.profile.invalid_data);
        console.log('outter if');
        setCardInfo({
          cvc: '',
          expiry: '',
          focus: '',
          name: '',
          number: '',
        });
      }
    };

    const handleInputFocus = (e) => {
      setCardInfo({ ...cardInfo, focus: e.target.name });
    };

    const handleInputChange = ({ target }) => {
      if (target.name === 'number') {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === 'expiry') {
        target.value = formatExpirationDate(target.value);
      } else if (target.name === 'cvc') {
        target.value = formatCVC(target.value);
      }

      setCardInfo({ ...cardInfo, [target.name]: target.value });
    };

    return (
      <Card className="card credit-card">
        <h1>{text.profile.credit}</h1>
        <Card.Body className="credit-body">
          <br></br>
          <div id="card-img">
            <Cards
              cvc={cardInfo.cvc}
              expiry={cardInfo.expiry}
              focused={cardInfo.focus}
              name={cardInfo.name}
              number={cardInfo.number}
              locale={{ valid: text.profile.valid_until }}
              placeholders={{ name: text.profile.complete_name }}
            />
            <form>
              <div className="input-wrapper">
                <div className="long-input">
                  <label>
                    {text.profile.number}:
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={cardInfo.number}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </label>
                </div>
                <div className="short-input">
                  <label>
                    {text.profile.cvc}:
                    <input
                      id="cvc"
                      type="text"
                      name="cvc"
                      value={cardInfo.cvc}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </label>
                </div>
              </div>
              <div className="input-wrapper">
                <div className="long-input">
                  <label>
                    {text.profile.complete_name}:
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={cardInfo.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </label>
                </div>
                <div className="short-input">
                  <label>
                    {text.profile.expiry}:
                    <input
                      id="expiry"
                      type="text"
                      name="expiry"
                      value={cardInfo.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <Button
            className="card-submit"
            variant="primary"
            onClick={handleSubmit}
          >
            {text.profile.register}
          </Button>
        </Card.Body>
      </Card>
    );
  };
  // -------------------------

  // Card Data subComponent
  const CardData = () => {
    let hideNum = [];
    const hideCard = () => {
      for (let i = 0; i < number.length; i++) {
        if (i < number.length - 4) {
          hideNum.push('*');
        } else {
          hideNum.push(number[i]);
        }
      }
      return hideNum;
    }

    return (
      <Card className="card credit-card">
        <h1>{text.profile.credit}</h1>
        <Card.Body>
          <br></br>
          <Card.Subtitle className="card-subtitle">
            {text.profile.number}:
          </Card.Subtitle>
          <Card.Text className="card-text-items">{hideCard()}</Card.Text>
          <Card.Subtitle className="card-subtitle">
            {text.profile.company}:
          </Card.Subtitle>
          <Card.Text className="card-text-items">{brand}</Card.Text>
          <Card.Subtitle className="card-subtitle">
            {text.profile.expiry}:
          </Card.Subtitle>
          <Card.Text className="card-text-items">{expiry}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  // ----------------------

  return <>{exist ? <CardData /> : <Registration />}</>;
};

export default CreditCard;
