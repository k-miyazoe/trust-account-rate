import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    profile: {
        name: string;
        walletaddress: string;
        bio: string;
    };
}

const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
    return (
        <div className="sidebar">
            <div className="profile-info">
                <h2>{profile.name}</h2>
                <p>{profile.walletaddress}</p>
                <p>{profile.bio}</p>
            </div>
        </div>
    );
};

export default Sidebar;
