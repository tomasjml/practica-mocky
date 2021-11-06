import React from "react";
import Logo from "../../../logo-dark.png";
import "../assets/css/AuthenticationComponentStyle.css";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const AuthenticationComponent = ({ onSave }) => {
	const {
		handleSubmit,
		register
		// formState: { errors }
	} = useForm();

	return (
		<div className="container container-fluid min-vh-100">
			<div className="row d-flex justify-content-md-center min-vh-100">
				<div className="col col-md-6 m-auto">
					<div className="card">
						<div className="card-body">
							<main className="form-signin">
								<form className="text-center" onSubmit={handleSubmit(onSave)}>
									<div className="row m-4">
										<div className="col">
											<img
												src={Logo}
												className="d-inline-block align-top"
												alt="Mocky logo"
												height="38px"
												width="150.86px"
											/>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<h1 className="h3 mb-3 fw-normal">Sign in</h1>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="form-floating">
												<input
													type="text"
													className="form-control"
													id="textFieldUsername"
													placeholder="User: johndoe"
													{...register("username", {
														required: "This is required"
													})}
													required
												/>
												<label htmlFor="textFieldPassword">Username</label>
											</div>
											<div className="form-floating">
												<input
													type="password"
													className="form-control"
													id="textFieldPassword"
													placeholder="Password"
													{...register("password", {
														required: true
													})}
												/>
												<label htmlFor="floatingPassword">Password</label>
											</div>
										</div>
									</div>

									<div className="checkbox mb-3">
										<label htmlFor="checkBoxRememberMe">
											<input
												id="checkBoxRememberMe"
												type="checkbox"
												value={e => e.target}
												{...register("rememberMe", {})}
											/>
											Remember Me
										</label>
									</div>
									<button className="w-100 btn btn-lg btn-primary" type="submit">
										Sign in
									</button>
									<p className="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
								</form>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AuthenticationComponent.propTypes = {
	onSave: PropTypes.func
};

export default AuthenticationComponent;
