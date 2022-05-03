import web3 from './web3';

const address = '0xe5F9bD5198D57cc4f9e248188a095B120819A296';

const abi = [
    {
        "inputs":[],
        "stateMutability":"nonpayable",
        "type":"constructor"
    },
    {
        "inputs":[],
        "name":"entry",
        "outputs":[],
        "stateMutability":"payable",
        "type":"function"
    },
    {
        "inputs":[],
        "name":"getPlayers",
        "outputs":
            [
                {
                    "internalType":"address[]",
                    "name":"","type":"address[]"
                }
                ],
        "stateMutability":"view","type":"function"
    },
    {
        "inputs":[],
        "name":"manager",
        "outputs":
            [
                {
                    "internalType":"address",
                    "name":"",
                    "type":"address"
                }
                ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[],
        "name":"pickWinner",
        "outputs":[],
        "stateMutability":"payable",
        "type":"function"
    },
    {
        "inputs":
            [
                {
                    "internalType":"uint256",
                    "name":"",
                    "type":"uint256"
                }
                ],
        "name":"players",
        "outputs":
            [
                {
                    "internalType":"address",
                    "name":"",
                    "type":"address"
                }
                ],
        "stateMutability":"view",
        "type":"function"
    }
];

export default new web3.eth.Contract(abi, address);
