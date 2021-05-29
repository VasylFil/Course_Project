import React from 'react';
import classes from './markets.module.scss';


function Markets(props){
    const
        setFav = index => {
            props.state.set_fav(index)
        }

    const
        sortBy = (type) => {
            switch (type){
                case 'pair':
                    console.log('pair')
                    break
                case 'price':
                    console.log('price')
                    break
                case 'change':
                    console.log('change')
                    break
                case 'high':
                    console.log('high')
                    break
                case 'low':
                    console.log('low')
                    break
                case 'cap':
                    console.log('cap')
                    break
                case 'vol':
                    console.log('vol')
                    break
                case 'fav':
                    console.log('fav')
                    break
                default:
                    return
            }
        }

    return(
        <div className={classes.section}>
            <div className={`${classes.rating} ${classes.flexItem}`}>
                {props.state.rank.map( (item, index) => (
                    <div className={classes.top} key={index}>
                        <div className={classes.sym}>{item.pair}</div>
                        <div className={`${classes.flexItem} ${classes.hilo}`}>
                            <div className={classes.hi}>{item.hi}</div>
                            <div  className={classes.lo}>${item.lo}</div>
                            <div className={classes.chart}/>
                        </div>
                        <div className={`${classes.flexItem} ${classes.vol}`}>
                            <div>{item.change}</div>
                            <div>Volume: {item.volume}</div>
                        </div>
                    </div>
                ))}
            </div>
           <div className={classes.markets}>
               <div className={classes.headline}>
                   <div onClick={sortBy.bind(this, 'pair')}>Pair</div>
                   <div onClick={sortBy.bind(this, 'price')}>Last Price</div>
                   <div onClick={sortBy.bind(this, 'change')}>24h Change</div>
                   <div onClick={sortBy.bind(this, 'high')}>24h High</div>
                   <div onClick={sortBy.bind(this, 'low')}>24h Low</div>
                   <div onClick={sortBy.bind(this, 'cap')}>Market Cap</div>
                   <div onClick={sortBy.bind(this, 'vol')}>24h Volume</div>
                   <div onClick={sortBy.bind(this, 'fav')}>Favorites</div>
               </div>
               <div className={classes.content}>
                   {
                       props.state.markets.map( (market, index) => (
                           <div className={`${classes.flexItem} ${classes.wrapper}`} key={index}>
                               <div className={classes.flexItem}>
                                   <div>{market.name}</div>
                                   <div>/{market.pair}</div>
                               </div>
                               <div className={classes.flexItem}>
                                   <div>{market.lastPrice}</div>
                                   <div>/${market.lastPriceUSD}</div>
                               </div>
                               <div>{market.change}</div>
                               <div>{market.high}</div>
                               <div>{market.low}</div>
                               <div>{market.cap}</div>
                               <div>{market.volume}</div>
                               <div onClick={ () => {
                                   setFav(index)
                               }}>{market.fav ? 'YES': 'NO'}</div>
                           </div>
                       ))
                   }
                   <div className={classes.more}>View More Markets ></div>
               </div>
           </div>
        </div>
    )
}

export default Markets
