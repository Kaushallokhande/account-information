import React, { useState } from 'react';
import '../styles/Account.css';

function Account() {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('password');
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Account updated successfully!');
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePicture(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="account-container mt-5">
            <h2>Account Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="profile-picture-section">
                    <label htmlFor="profilePicture">
                        <img
                            src={profilePicture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="profile-picture"
                        />
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        style={{ display: 'none' }}
                        onChange={handleProfilePictureChange}
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default Account;
