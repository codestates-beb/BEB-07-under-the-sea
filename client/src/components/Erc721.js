import "./Erc721.css"

function Erc721({ erc721list }) {
    return (
        <div className="erc721list">
            {erc721list.slice(0).reverse().map((token) => {
                return (
                    <div className="erc721token">

                        <span className="name">
                            {token.name}</span>
                        {/* (<span className="symbol">{token.symbol}</span>) */}

                        <div className="nft">id: {token.tokenId}</div>
                        <img className="created__NFT--thumbnail"
                            src={token.tokenURI} width={300} />
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;