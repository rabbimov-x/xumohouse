import styled ,{ createGlobalStyle , css } from "styled-components";




const  allCommon = css`
width: ${({w})=>w? w : `100%`};
height: ${({h})=>h? h :`auto`}; 
position: ${({position})=>position? position : `relative`};
display: ${({display})=>display ? display : "block"};
flex-direction: ${({flex})=> flex? flex : "none"}; 
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left" }; 
align-items: ${({align})=>align? align: "" };
text-align: ${({textC})=>textC? textC : "left"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
color: ${({cl})=>cl? `var(${cl})` : "var(--cl-white)"}; 
`
const font = css`
font-family: ${({fontF})=> fontF ? `var(${fontF})` : "var(--familyR)"} ;
font-size: ${({size})=> size ? `var(${size})` : "var(--size16)"};
font-weight: ${({bold})=> bold ? bold : "400"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display ? display : "block"};
line-height: 140% ;
`

export const  GlobalStyle = createGlobalStyle`
  
  body{
      width: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      background-color: red;
  }
  *{
      box-sizing: border-box;
  }
`
export const H1 = styled.h1`
${font}
color : ${({cl})=>cl ? `var(${cl})` : "var(--cl-white)"};
text-transform: uppercase;
text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`


export const P = styled.p`
${font}
width: ${({w})=> w ? w : "" };
line-height: 140%;
font-style: normal;
order: 0;
color : ${({cl})=>cl ? `var(${cl})` : "var(--shade-7)"};
/* text-shadow: ${({tSh})=> tSh ? "-1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1)" : "-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1)"}; */
/* filter: ${({fSh})=> fSh ? "drop-shadow(-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15))" : "none"}; */
`

export const Container = styled.div`
width: 100%;
display: ${({display})=>display ? display : "flex"};
flex-direction: ${({flex})=> flex? "column" : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left"};
align-items: ${({align})=>align? "center": "" };
padding: ${({pd})=>pd? pd : "0"} 4%;
background-color: ${({bg})=>bg? `var(${bg})` : ""};
`
export const Col12 = styled.div`    

      ${allCommon}
      width: 100%;
      padding: ${({pd})=>pd? pd : "0 var(--mp10)"} ;
`
export const Col10 = styled(Col12)`
    width: 83.333%;
`
export const Col8 = styled(Col12)`
    width: 66.666%;
    @media (max-width: 956px) {
        width: 100%;
    }
`
export const Col6 = styled(Col12)`
    width: 50%;
    @media (max-width: 934px) {
        width: ${({min})=> min ? "50%" : "100%"};
    }
    
`
export const Col4 = styled(Col12)`
    width: 33.333%;
    @media (max-width: 934px) {
        width: ${({max})=> max ? "50%" : "33.333%"};
    }
    @media (max-width: 757px) {
        width: ${({max})=> max ? "65%" : "50%"};
    }
    @media (max-width: 576px) { 
        width:  ${({max})=> max ? "100%" : "100%"}; 
        margin: 0 auto;
        padding: 0 auto;
    }
`
export const Col3  = styled(Col12)`
    width: 25%;
    @media (max-width: 757px) {
        width: 33.333%;
    }
    @media (max-width: 576px) {
        width: 50%;
        margin: 0 auto;
        padding : 0 auto ;
    }
    
`
export const Col2  = styled(Col12)`
width: 16.6%;
@media (max-width: 992px) {
    width: 25%;
}
@media (max-width: 757px) {
    width: 33.333%;
}
@media (max-width: 576px) {
    width: 50%;
    margin: 0 auto;
    padding : 0 auto ;
}
`
export const Div = styled.div`
${allCommon}
top: ${({top})=>top? top : ""};
left: ${({left})=>left? left : ""};
right: ${({right})=>right? right : ""};
bottom: ${({bottom})=>bottom? bottom : ""};
-webkit-box-align: none;
`
export const Button  = styled.button`
border: none;
outline: none;
height: fit-content;
padding: ${({pd})=>pd? pd : "8px 20px"};
border-radius: ${({brr})=>brr? brr : "5px"};
margin: ${({mr})=>mr? mr : "0"};
background-color:${({bg})=>bg ? `var(${bg})` : "var(--primary)"} ;
color:${({cl})=>cl? `var(${cl})` : "var(--shade-1)"}; 
border: ${({btn})=> btn === "labelp" ? "1px solid var(--primary)": btn ==="labelt"? "1px solid var(--secondary)":"none"};
font-family: var(--familyR);
font-style: normal;
font-weight: 400;
font-size:${({size})=>size? `var(${size})` : "var(--siz16)"} ;
line-height: 140%;
display: flex;
align-items: center;
transition: all 0.1s ease;
&:hover{
    border-color: var(--secondary);
    background-color: ${({bgh})=>bgh ? `var(${bgh})` : "var(--secondary)"};
    color: var(--shade-1)
}
&:active{
    transform: scale(0.95);
}
@media (max-width: 767px) {
    padding: 6px 15px;
}
`
Button.Wish = styled.button`
${font}
width: 48px;
height: 48px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
border: none;
margin: ${({mr})=>mr? mr : "0"};
outline: none;
background: #FFFFFF;
border-radius: 50%;
background-color: var(--shade-1);
box-shadow: 0px 4px 8px rgba(25, 32, 56, 0.16);
& .numberBtn{
    content: ${({content})=> content? content : "0"};
    ${font}
    position: absolute;
    width: 18px;
    height: 18px;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--size13);
    border-radius: 50%;
    background-color: var(--secondary);
}
svg{
        path{
            fill: var(--shade-6)
        }
    }
&:hover{
    svg{
        path{
            fill: var(--shade-7)
        }
    }
}
@media (max-width: 992px) {
    width: 40px;
    height: 40px;
    .numberBtn{
        bottom: -1.5px;
        right: -1.5px;
        width: 16px;
        height: 16px;
    }
}
`
Button.Back = styled(Button.Wish)`
svg{
    path{
        fill: var(--shade-6)
    }
}
&:hover{
    background-color: var(--secondary);
svg{
    path{
        fill: var(--shade-1)
    }
}
}
`
Button.Slider = styled(Button.Wish)`
width: 16px;
height: 16px;
border: 1.5px solid var(--shade-1);
background-color: var(--shade-1);
&:hover{
    background-color: var(--secondary);
}
box-shadow: 0px 0px 8px rgba(25, 32, 56, 0.32);
`



export const Line = styled.div`
${allCommon}
height: 0;
flex: ${({flex})=> flex? flex : ""};
border: 1px solid ${({br})=> br ? `var(${br})` : "var(--shade-6)"};
`

export const LinkA = styled.a`
text-decoration: none;
cursor: pointer;
font-family: var(  --family);
font-size: var(--size12);
font-weight: ${({bold})=> bold ? "600" : "500"};
display: flex;
align-items: center;
margin: ${({mr})=>mr? mr : "0 5px"};
color: ${({cl})=> cl ? `var(${cl})` : "var(--cl-white)"};
&:hover{
    color: var(--cl-red);
    fill:red;
}
`
export const Icon = styled.div`
`
// Svg larga stel berilgan

const common = css`
width: ${({w})=>w? `var(${w})` : `var(--icon-w24)`};
height: auto;
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display? display : "block" };
 & path{
     fill: ${({cl})=>cl ? `var(${cl})` : ``};
 }
`

export const  Img = styled.div`
${allCommon}
overflow: hidden;
border-radius: ${({rad})=> rad ? rad : ""};
background-color: ${({bg})=> bg ? `var(${bg})` : "var(--shade-6)"};
&> img{ 
    height: ${({h})=> h ? h : "auto"};
    min-height: 100%;
    width: 100%;
    max-width: ${({mw})=> mw ? mw : "150%"};
    object-fit: ${({fit})=> fit ? "cover" : ""};
}
`
export const Social = styled.div`
width: 32px;
height: 32px;
display: flex;
outline: none;
text-decoration: none;
justify-content: center;
border-radius: 50%;
align-items: center;
border:  1px solid var(--primary);
transition: all 0.1s ease;
&> svg{
    width: 20px;
    path{
        fill: var(--primary); 
    }
}
&:hover{
    background-color: var(--secondary);
    border-color: var(--secondary);
    svg{
        path{
            fill: var(--shade-1);
        }
    }
}
&:active{
    transform: scale(0.9);
}
@media (max-width: 1200px) {
    width: 28px;
    height: 28px;
    &> svg{
    width: 18px;
    
}
}
@media (max-width: 992px) {
    width: 26px;
    height: 26px;
    &> svg{
    width: 17px;
    
}
}
@media (max-width: 767px) {
    width: 24px;
    height: 24px;
    &> svg{
    width: 15px;
}
}
`
