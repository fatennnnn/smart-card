import React, { Component } from 'react'
import './Credit.css'

export default class Credit extends Component {
    constructor(props){
        super(props)
        this.state=({
            numero:'',
            nom:'',
            date:''

        });
    }
    fnumber=(e)=>{
        let regexx = /^[0-9]*$/ ;
        if (regexx.test(e.target.value.length <=19))
        this.setState({numero:e.target.value})
        else 
        
                 {


                 e.target.value= this.state.numero.substr(0, 19)
                 }
    //     else 
    //     {
    //         (e.target.value)=""
    //         this.setState({numero:""})
    //    }

    }
    fnom=(e)=>{
        let reg=/^[a-zA-Z ]+$/;
        if (reg.test(e.target.value.length <=20))
        this.setState({nom:e.target.value})
    //     else 
    //     {
    //         (e.target.value)=""
    //         this.setState({nom:""})
    //    }

    }
     mois=(da)=>
{let a=String(da)
let str1=a[0]+a[1]
let st=a[0]

if((a.slice(0,1)>=2)||(a.slice(0,2)>12))
{return "";}
// else if(str1<10)
// {str1.padStart(2,"0")}
let str2=a[2]+a[3]
// if(num.length==4){return n}
return da.slice(0,2)+"/"+da.slice(2)
}
    fdate=(e)=>{
        let re = /^[0-9]*$/ ;
        if (re.test(e.target.value))

        this.setState({date:e.target.value})
        else 
        {
            (e.target.value)=""
            this.setState({date:""})
       }

    }
    render() {
        return (
<div className="tot">
            <div className="cards">
                    <div className="cards-left">

                    <p className="pleft">Company name</p>
                    <img   src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png" width="100" height="60"/>
                    <p className="pleftpa">{this.state.numero.split(/(\d{4})/).join(' ').trim().padEnd(20, '*')}</p>
                    </div>

                    <div className="partsecond">
                    <div >
                    <p className="partsec1">{this.mois(this.state.date.padEnd(4, '*'))}</p>
                    <p>{this.state.nom.toUpperCase()}</p>
                    </div>

                    <img className="left" src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"width="110" height="100"/>
                    </div>
                    </div>
        <div className="right">
                    <input type="text" onChange={this.fnumber} className="butt" />
                    <input type="text" onChange={this.fnom} className="butt" />
                    <input type="text"onChange={this.fdate} className="butt"maxlength="4" />
        </div>


            
</div>
        )
    }
}
