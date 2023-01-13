const Social = ({user}) => {
    const socials = user.socials;
    return (
      <div className="">
        <div className="font-sm text-primary pt-3 mb-1">Socials</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Twitter</p>
            <h5 className="text-primary m-0">{ socials.twitter }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Facebook</p>
            <h5 className="text-primary m-0">{ socials.facebook }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Instagram</p>
            <h5 className="text-primary m-0">{ socials.instagram }</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Social;