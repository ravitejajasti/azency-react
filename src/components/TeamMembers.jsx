import React from "react";

const TeamMembers = () => {
    return (
        <>
        <div className="col-lg-auto">
            <span className="text-cap small">Team members:</span>
            <div className="d-flex">
                {/* Avatar Group */}
                <div className="avatar-group avatar-circle me-3">
                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Amanda Harvey">
                        <img className="avatar-img" src="src/assets/img/160x160/img10.jpg" alt="Image Description" />
                    </a>
                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Linda Bates">
                        <img className="avatar-img" src="src/assets/img/160x160/img9.jpg" alt="Image Description" />
                    </a>
                    <a className="avatar avatar-soft-info" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="#digitalmarketing">
                        <span className="avatar-initials">
                            <i className="bi-people-fill" />
                        </span>
                    </a>
                    <a className="avatar" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="David Harrison">
                        <img className="avatar-img" src="src/assets/img/160x160/img3.jpg" alt="Image Description" />
                    </a>
                    <a className="avatar avatar-soft-dark" href="./user-profile.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Antony Taylor">
                        <span className="avatar-initials">A</span>
                    </a>
                    <a className="avatar avatar-light avatar-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                        <span className="avatar-initials">+2</span>
                    </a>
                </div>
                {/* End Avatar Group */}
                <a className="btn btn-primary btn-icon rounded-circle" href="javascript:;" data-bs-toggle="modal" data-bs-target="#shareWithPeopleModal">
                    <i className="bi-share-fill" />
                </a>
            </div>
        </div>
        </>
    )
};

export default TeamMembers;