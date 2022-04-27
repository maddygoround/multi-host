
export const getServerSideProps = () => {
    return {
        props: {
            message: "hello"
        }
    };
};

const Host = ({ message }) => {
    return <div> <input type="text" placeholder="Enter your domain" />
        <button>Host</button>
    </div>;
};

export default Host;