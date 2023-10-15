import Paperrate from './paperrate';
import Plasticrate from './plasticrate';
import Metalrate from './metalrate';
import Ewasterate from './ewaste';
import Othersrate from './othersrate';
// import LocationComponent from '../location';

const All = ()=>{
    return(
        <>
                <Paperrate/>
                <Plasticrate/>
                <Metalrate/>
                <Ewasterate/>
                <Othersrate/>
                {/* <LocationComponent/> */}
        </>
    )
}

export default All;