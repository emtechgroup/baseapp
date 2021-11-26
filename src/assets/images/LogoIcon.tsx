import * as React from 'react';
import companyLogo from './topLogo.png';

interface LogoIconProps {
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <img src={companyLogo} alt="SNB Exchange" width='200px'/>


    
);
