import React, { useEffect } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import auth, { loginUrl } from '../../core/auth';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import { AwsHook } from '../../core/context/AwsContext';
import SmartError from '../components/error/SmartError';
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    
  }
  .box-login p{
    color: #a2a2a2 !important;
  }
  .box-login{
    border-radius: 3px;
    padding: 40px 50px;
  }
`;
const validationSchema = Yup.object().shape({
  identifier: Yup.lazy(() =>
    Yup.string()
      .required('Username is required')
  ),
  password: Yup.lazy(() =>
    Yup.string()
      .required('Password is required')
  ),
});

const initialValues = {
  identifier: '',
  password: ''
};
function Logintwo() {
  const { wallet, user, errorState,resetError } = AwsHook()
  const navigate = useNavigate();
  const redirectUser = (path) => {
    navigate(path);
  }

  const handleSubmitForm = async (data) => {
    resetError()
    const user = await Auth.signIn(data.identifier, data.password);
    auth.setToken(user.signInUserSession.accessToken.jwtToken, false)
    auth.setUserInfo(user, false)
    const userInfo = auth.getUserInfo()
  }
  useEffect(() => {
    console.log({user})
    if (!user) return
    console.log({user})
    redirectUser(`/Author/${user.user}`)
  }, [user])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' >

        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row align-items-center px-0'>
              <div className="col-lg-4 offset-lg-4 m-auto px-0">
                <div className="box-login">
                  <h3 className="mb10">Sign In</h3>
                  <p>Login using an existing account or create a new account
                    <span onClick={() => {
                      redirectUser(`/register`)
                    }} >here</span>.</p>
                  {errorState && errorState.state &&
                    <SmartError error={errorState.error} />}
                  <Formik
                    enableReinitialize
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    validateOnMount={validationSchema.isValidSync(initialValues)}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      // const submitData = pick(values, [...requiredFields]);
                      setSubmitting(true);
                      await handleSubmitForm(values);
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {
                      ({ values, isSubmitting, isValid }) => {
                        const isAllValid = isValid;
                        const submitValidationMessage = 'Please fill in all required fields';

                        return (
                          <Form className="form-border">
                            <div className="field-set">
                              <Field className="form-control" type="email" name="identifier" />
                              <ErrorMessage name="identifier" component="div" />
                            </div>
                            <div className="field-set">
                              <Field className="form-control" type="password" name="password" />
                              <ErrorMessage name="password" component="div" />
                            </div>
                            <div className="field-set">
                              <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2" />
                            </div>
                            <div className="clearfix"></div>
                            <div className="spacer-single"></div>
                            <ul className="list s3">
                              <li>Login with:</li>
                              <li><span >Facebook</span></li>
                              <li><span >Google</span></li>
                            </ul>
                            <div className="spacer-half"></div>
                          </Form>
                        )
                      }
                    }
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>

  );
}
export default Logintwo;