import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './styles/footer.css'

export default function App() {
  return (
    <MDBFooter className='text-center' id='FooterContainer' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='footerActionsSection'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4' id='suscribe'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
              <section className='links'>
                <MDBRow>
                  <MDBCol lg='3' md='6' className='links-1'>
                    <h5 className='text-uppercase'></h5>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!' className='text-white'>
                          Customer Support
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Work with us
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                  <MDBCol lg='3' md='6' className='links-2'>
                    <h5 className='text-uppercase'></h5>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!' className='text-white'>
                          Payment Method
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Shipping
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Return Policy
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                  <MDBCol lg='3' md='6' className='links-3'>
                    <h5 className='text-uppercase'></h5>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!' className='text-white'>
                          About us
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href='#!' className='text-white'>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </section>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}