pragma solidity >=0.4.21 <0.7.0;

contract HelloWorld{
    uint public greeting;
    constructor(uint _greeting) public{
        greeting = _greeting;
    }

    function setGreeting(uint _greeting) public{
        greeting = _greeting;
    }

    function say() public view returns(uint){
        return greeting;
    }
}