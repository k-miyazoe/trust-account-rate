import React from 'react';
import './Wallet.css';

interface WalletProps {
    profile: {
        name: string;
        walletaddress: string;
    };
}

const Wallet: React.FC<WalletProps> = ({ profile }) => {
    return (
        <div className="wallet">
            <div className="profile-info">
                <h2>{profile.name}</h2>
                <p>{profile.walletaddress}</p>
            </div>
        </div>
    );
};

export default Wallet;
