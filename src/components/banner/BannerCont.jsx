

const BannerCont = ({children, className=""}) => {
  return (
    <div className={`w-full h-screen mx-10 ${className} `} style={{backgroundImage: `url("https://iili.io/2nN1ufe.jpg")`, backgroundSize:"cover", backgroundPosition: 'center' }} >
        {children}
    </div>
  )
}

export default BannerCont