import { Link } from 'react-router-dom';
import '../style/globals.css';

export default function Register() {
    return (
      <div className="register">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12">
              <form className="form bg-dark">
                <p className="title">Register </p>
                <p className="message">
                  Signup now and get full access to our app.{" "}
                </p>
                <div className="flex">
                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      className="input"
                    />
                    <span>Firstname</span>
                  </label>

                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      className="input"
                    />
                    <span>Lastname</span>
                  </label>
                </div>

                <label>
                  <input
                    required
                    placeholder=""
                    type="email"
                    className="input"
                  />
                  <span>Email</span>
                </label>

                <label>
                  <input
                    required
                    placeholder=""
                    type="password"
                    className="input"
                  />
                  <span>Password</span>
                </label>
                <label>
                  <input
                    required
                    placeholder=""
                    type="password"
                    className="input"
                  />
                  <span>Confirm password</span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">
                  Already have an acount ?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Login
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}