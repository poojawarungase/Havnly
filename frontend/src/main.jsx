import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';

import App from './App.jsx'
import Auth from './context/auth.jsx';
import Listauth from './context/listauth.jsx';
import { BrowserRouter } from 'react-router-dom';
import Userauth from './context/user.jsx';
import AddressCont from './context/addresscontex.jsx';
import AmenitiesCont from './context/amenitiescont.jsx';
import UpdateList from './context/updatelistcontex.jsx';
import Bookingcontext from './context/bookingcontex.jsx';
import Reviewcont from './context/reviewcontext.jsx';
import Wishlistcont from './context/wishlistcontex.jsx';
import Chatbotcontext from './context/chatbotcontext.jsx';
import Paymentcon from './context/paymentcontex.jsx';
import OTPContex from './context/otpcontex.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Auth>

      <AddressCont>
        <Wishlistcont>
          <AmenitiesCont>
            <Listauth>
              <UpdateList>
                <Userauth>
                  <OTPContex>
                    <Chatbotcontext>
                      <Bookingcontext>
                        <Paymentcon>
                          <Reviewcont>

                            <App />

                          </Reviewcont>
                        </Paymentcon>
                      </Bookingcontext>
                    </Chatbotcontext>
                  </OTPContex>
                </Userauth>
              </UpdateList>
            </Listauth>
          </AmenitiesCont>
        </Wishlistcont>
      </AddressCont>
    </Auth>
  </BrowserRouter>
  // </StrictMode>,
)
