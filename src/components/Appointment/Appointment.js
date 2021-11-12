import React from 'react';
import './Appointment.css'
const Appointment = () => {
    return (
        <div className="container my-4 bg-info p-5">
            <form className="mx-auto w-75" action="" method="POST">
                <fieldset>
                    <legend>New Appointment</legend>
                    <div className="row mx-0">
                        <div className="col-md-6">
                            <label for="department">Department</label>
                            <select id="department" className="form-control" name="department">
                                <option selected disabled>Choose...</option>
                                <option value="">Medicine</option>
                                <option value="">Neurology</option>
                                <option value="">Gastrology</option>
                                <option value="">Antrology</option>
                                <option value="">Cardiology</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="doctor">Doctor</label>
                            <select id="doctor" className="form-control" name="doctorID">
                                <option selected disabled>Choose...</option>
                                <option>Prof. Dr. M.M. Zahurul Alam Khan</option>
                                <option>Prof. Dr. Asia Khanam</option>
                                <option>Assot. Prof. Dr. Moududul Haque</option>
                                <option>DR. A K S ZAHID MAHAMUD KHAN</option>
                                <option>Dr. Begum Hosne Ara</option>
                                <option>Dr. Faroque Ahmed</option>
                                <option>DR. ARUN KUMAR SHARMA</option>
                                <option>DR. M BAHADUR ALI MIAH</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-md-6">
                            <label for="name">Full Name</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="col-md-6">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-md-6">
                            <label for="contact">Contact No.</label>
                            <input type="text" className="form-control" id="contact" name="contact" required />
                        </div>
                        <div className="col-md-6">
                            <label for="address">Address</label>
                            <input type="text" className="form-control" id="address" name="address" required />
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-md-6">
                            <label for="select">Gender</label>
                            <select id="select" className="form-control" name="gender" required>
                                <option value="unknown" selected disabled>Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="age">Age</label>
                            <input type="text" className="form-control" id="age" name="age" required />
                        </div>
                    </div>

                    <div className="row mx-0">
                        <div className="col-md-4">
                            <label for="select">Pick a Suitable Date</label>
                            <input type="date" className="form-control" required />

                        </div>

                        <div className="col-md-8">
                            <label for="reason">Reason For Appoinment</label>
                            <input type="text" className="form-control" id="reason" name="reason" />
                        </div>
                    </div>
                    <div className="row mx-0 mt-5">
                        <input type="submit" className="btn btn-light col-md-3 col-sm-2 mx-auto mb-1" value="Submit" name="book" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Appointment;