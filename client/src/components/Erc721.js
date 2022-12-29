import "./Erc721.css"
import { useState } from "react";
import { web3, erc721Abi } from "../erc721Abi";

function Erc721({ account, erc721list }) {
    const [to, setTo] = useState("");
    const sendToken = async (tokenAddr, tokenId) => {
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            tokenAddr,
            {
                from: account,
            }
        );
        tokenContract.methods
            .transferFrom(account, to, tokenId)
            .send({
                from: account,
            })
            .on("receipt", (_receipt) => {
                setTo("");
            });
    };
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

                        <div className="tokenTransfer">
                            To:{" "}
                            <input
                                type="text"
                                value={to}
                                onChange={(e) => {
                                    setTo(e.target.value);
                                }}
                            ></input>
                            <button
                                className="sendErc20Btn"
                                onClick={sendToken.bind(
                                    this,
                                    token.address,
                                    token.tokenId
                                )}
                            >
                                send Token
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;