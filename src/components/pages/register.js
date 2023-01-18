import React, { Component } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { AUTHOR, AVATAR } from '../../models';
import { string } from 'yup';
import { Auth } from 'aws-amplify';
import { SendToS3, withRouter } from '../../utils';
import { AwsContext } from '../../core/context/AwsContext';
import SmartError from '../components/error/SmartError';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;
class Register extends Component {
    static contextType = AwsContext
    constructor() {
        super()
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.verify = this.verify.bind(this);
        this.username = React.createRef()
        this.code = React.createRef()
        this.password = React.createRef()
        this.phone_number = React.createRef()
        this.email = React.createRef()
        this.state = {
            photo: null,
            confirm: false
        }
    }
    async submit(e) {
        e.preventDefault()
        this.context.resetError()
        const username = this.email.current.value
        const usr_name = this.username.current.value
        const password = this.password.current.value
        const phone_number = this.phone_number.current.value
        const email = this.email.current.value
        const { name, size, type } = this.state.photo
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    phone_number,
                    name: usr_name,
                    picture: name
                },
                autoSignIn: {
                    enabled: true,
                }
            })
            if (user) {
                this.setState({
                    ...this.state,
                    confirm: true,
                    email: email
                })
            }
        } catch (error) {
            console.log('error verifying:', error.message);
        }
    }
    async verify(e) {
        e.preventDefault()
        const username = this.state.email
        const code = this.code.current.value
        try {
            const { confirmation } = await Auth.confirmSignUp(username, code);
            await SendToS3(this.state.photo, "author")
        } catch (error) {
            console.log('error verifying:', error.message);
            //console.log('error signing up:', error.message);
        }
    }
    onChange(e) {
        // var files = e.target.files;
        // var filesArr = Array.prototype.slice.call(files);
        const i = e.target.files[0]
        // const image = URL.createObjectURL(i)
        // document.getElementById("file_name").style.display = "none";
        this.setState({
            ...this.state,
            photo: i
        });
    }
    componentDidUpdate() {
        try {
            if (this.context.user) this.props.navigate(`/Author/${this.context.user.user}`)
        } catch (error) {
            console.log("Error: ", error)
        }
        try {
            if (this.context.errorState) {
                if (this.context.errorState.state) {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            }
        } catch (error) {

        }
    }
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    componentWillUnmount(){
        this.context.resetError()
    }
    render() {
        return (
            <div>
                <GlobalStyles />
                <section className='container'>
                    <div className="row">
                        <div className='spacer-double'></div>
                        <div className="col-md-8 offset-md-2">
                            <h3>Don't have an account? Register now.</h3>
                            {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> */}
                            <div className="spacer-10"></div>
                            {this.context.errorState && this.context.errorState.state &&
                                <SmartError error={this.context.errorState.error} />}
                            {this.state.confirm ?
                                (<>
                                    <form onSubmit={this.verify} name="contactForm" id='contact_form' className="form-border" action='#'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Code:</label>
                                                    <input type='number' name='code' id='code' className="form-control" ref={this.code} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div id='submit' className="pull-left">
                                                    <input type='submit' id='send_message' value='Verify' className="btn btn-main color-2" />
                                                </div>

                                                <div className="clearfix"></div>
                                            </div>

                                        </div>
                                    </form>
                                </>
                                ) : (
                                    <form onSubmit={this.submit} name="contactForm" id='contact_form' className="form-border" action='#'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Email Address:</label>
                                                    <input type='email' name='email' id='email' className="form-control" ref={this.email} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Choose a Username:</label>
                                                    <input type='text' name='username' id='username' className="form-control" ref={this.username} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Phone:</label>
                                                    <input type='tel' name='phone' id='phone' className="form-control" ref={this.phone_number} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Profile Picture:</label>
                                                    <input type='file' accept="image/png, image/jpeg" name='profile_picture' id='profile_picture' className="form-control" onChange={this.onChange} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Password:</label>
                                                    <input type='password' name='password' id='password' className="form-control" ref={this.password} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="field-set">
                                                    <label>Re-enter Password:</label>
                                                    <input type='password' name='re-password' id='re-password' className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div id='submit' className="pull-left">
                                                    <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2" />
                                                </div>

                                                <div className="clearfix"></div>
                                            </div>

                                        </div>
                                    </form>
                                )
                            }
                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}
export default withRouter(Register)