import CounterButton from '../counter-button/counter-button.component';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1>Github Issues</h1>
            <div className='action-buttons'>
                <CounterButton
                    title={'Watch'}
                    toggleTitle={'Unwatch'}
                    count={50}
                />
                <CounterButton
                    title={'Star'}
                    toggleTitle={'Unstar'}
                    count={500}
                />
                <CounterButton
                    title={'Fork'}
                    toggleTitle={'Unfork'}
                    count={150}
                />
            </div>
        </div>
    );
};

export default Header;
