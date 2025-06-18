import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../../types";
import "./_userDetails.scss";
import { useEffect, useState } from "react";
import { getStoredUsers } from "../../utils/userStorage";

const UserDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    const users = getStoredUsers();

    const foundUser = users.find((u) => u.id === id);
    setUser(foundUser ?? null);
    console.log("User Details:", foundUser);
  }, [id]);

  if (!user) return <div>User not found or loading...</div>;
  return (
    <div className="user-details-page">
      <div className="user-details-header">
        <button className="back-btn" onClick={() => navigate("/users")}>
          <img src="/back.svg" alt="back" /> Back to Users
        </button>

        <div className="user-details-actions">
          <h1>User Details</h1>
          <div className="action-buttons">
            <button className="blacklist-btn">BLACKLIST USER</button>
            <button className="activate-btn">ACTIVATE USER</button>
          </div>
        </div>
      </div>

      <div className="user-profile-overview">
        <div className="profile-header">
          <div className="profile-info">
            <img
              src={user.profile.avatar}
              alt="User Avatar"
              className="profile-avatar"
            />
            <div className="profile-details">
              <h2>
                {user.profile.firstName} {user.profile.lastName}
              </h2>
              <p>{user.userName}</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <img src="/starfull.svg" alt="full Star" />
              <img src="/star.svg" alt="Star" />
              <img src="/star.svg" alt="Star" />
            </div>
          </div>
          <div className="account-balance">
            <h3>{user.accountBalance}</h3>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        </div>
      </div>

      <div className="user-details-tabs">
        <div className="tab-nav">
          <button className="tab active">General Details</button>
          <button className="tab">Documents</button>
          <button className="tab">Bank Details</button>
          <button className="tab">Loans</button>
          <button className="tab">Savings</button>
          <button className="tab">App and System</button>
        </div>

        <div className="tab-content">
          <div className="details-section">
            <h3>Personal Information</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>FULL NAME</label>
                <p>
                  {user.profile.firstName} {user.profile.lastName}
                </p>
              </div>
              <div className="detail-item">
                <label>PHONE NUMBER</label>
                <p>{user.profile.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>EMAIL ADDRESS</label>
                <p>{user.email}</p>
              </div>
              <div className="detail-item">
                <label>BVN</label>
                <p>{user.profile.bvn}</p>
              </div>
              <div className="detail-item">
                <label>GENDER</label>
                <p>{user.profile.gender}</p>
              </div>
              <div className="detail-item">
                <label>MARITAL STATUS</label>
                <p>Single</p>
              </div>
              <div className="detail-item">
                <label>CHILDREN</label>
                <p>None</p>
              </div>
              <div className="detail-item">
                <label>TYPE OF RESIDENCE</label>
                <p>Parent's Apartment</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Education and Employment</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>LEVEL OF EDUCATION</label>
                <p>{user.education.level}</p>
              </div>
              <div className="detail-item">
                <label>EMPLOYMENT STATUS</label>
                <p>{user.education.employmentStatus}</p>
              </div>
              <div className="detail-item">
                <label>SECTOR OF EMPLOYMENT</label>
                <p>{user.education.sector}</p>
              </div>
              <div className="detail-item">
                <label>DURATION OF EMPLOYMENT</label>
                <p>{user.education.duration}</p>
              </div>
              <div className="detail-item">
                <label>OFFICE EMAIL</label>
                <p>{user.education.officeEmail}</p>
              </div>
              <div className="detail-item">
                <label>MONTHLY INCOME</label>
                <p>{user.education.monthlyIncome.join(" - ")}</p>
              </div>
              <div className="detail-item">
                <label>LOAN REPAYMENT</label>
                <p>{user.education.loanRepayment}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Socials</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>TWITTER</label>
                <p>{user.socials.twitter}</p>
              </div>
              <div className="detail-item">
                <label>FACEBOOK</label>
                <p>{user.socials.facebook}</p>
              </div>
              <div className="detail-item">
                <label>INSTAGRAM</label>
                <p>{user.socials.instagram}</p>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h3>Guarantor</h3>
            <div className="details-grid">
              <div className="detail-item">
                <label>FULL NAME</label>
                <p>
                  {user.guarantor.firstName} {user.guarantor.lastName}
                </p>
              </div>
              <div className="detail-item">
                <label>PHONE NUMBER</label>
                <p>{user.guarantor.phoneNumber}</p>
              </div>
              <div className="detail-item">
                <label>EMAIL ADDRESS</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="detail-item">
                <label>RELATIONSHIP</label>
                <p>Sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetailsPage;
