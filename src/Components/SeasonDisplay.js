import React from 'react';
import './SeasonDisplay.css';
const getSeason=(lat,month)=>{
if(month>2&&month<9){
    return (lat>0)? "Summer": "Winter"
}else{
    return (lat>0)? "Winter": "Summer"
}
}
function SeasonDisplay(props) {
    
    const season=getSeason(props.lat,new Date().getMonth())
    const text=(season==="Winter")?"Burr! Its Chilly":"Its Damn Hot"
    const iconName=(season==="Winter")?"snowflake":"sun"
    return (
        <div className={`${season}`}>
           <i className={`icon-left massive ${iconName} icon`}/>
           <h1 className={`${season}`}>{text}</h1>
           <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay
