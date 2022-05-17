import { useEffect, useState } from 'react';

const TextLoading = (props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 5000);
    }, []);

    if (props.withLoading && !loaded) return <div>Loading, please wait...</div>
    return (
        <div className='name-tag'>Finished loading.</div>
    )
};

export default TextLoading;