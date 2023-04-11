import Header from '../Header/Header';

const Default = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="mt-10">{children}</div>
        </div>
    );
};

export default Default;
