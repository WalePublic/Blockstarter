pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimumContrb) public {
        address newCampaign = new Campaign(minimumContrb, msg.sender);
        
        //Check if creation successful
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[])
    {
        return deployedCampaigns;
    }
}

contract Campaign {
    //Structs
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    //variables
    address public manager;
    uint256 public minimumContrb;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint256 minimum, address creator) public {
        manager = creator;
        minimumContrb = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContrb);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(address recipient, uint256 val, string description) public restricted {
        Request memory newReq = Request(
            {
                description: description,
                value: val,
                recipient: recipient,
                complete: false;
                approvalCount:0
            }
        );

        requests.push(newReq);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (uint256, uint, uint, uint256, address) {
        return(
            minimumContrb,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}