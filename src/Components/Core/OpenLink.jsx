const OpenLink = ({redirectURL, logoImage}) => {
    return (
        
            <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="logo" />
            </a>
    );
};

export default OpenLink;