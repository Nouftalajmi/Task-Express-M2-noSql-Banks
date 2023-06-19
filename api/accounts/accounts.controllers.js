
const Account = require("../../bd/model/Account");



exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {

    res
      .status(500)
      .json({ msg: "Something went wrong", details: error });
  }

};

exports.accountDelete = async (req, res) => {

  // const foundAccount = accounts.find((account) => account.id === +accountId);
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findOneAndDelete({ _id: accountId })

    if (!foundAccount) {
      res.status(404).json({ message: "Account not found" });
    }
    // foundAccount = accounts.filter((account) => account.id !== accountId);
    return res.status(204).json({ message: "Account deleted" });
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ msg: "Something went wrong", details: error });
  }




  // if (foundAccount) {
  //   accounts = accounts.filter((account) => account.id !== +accountId);
  //   res.status(204).end();
  // } else {
  //   res.status(404).json({ message: "Account not found" });
  // }
};

exports.accountUpdate = (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = Account.findById({ _id: accountId });
    if (!foundAccount)

      return res.status(404).json({ message: "Not found", })
    return res.status(200).json({ foundAccount })

  } catch (error) {
    // console.log(error)
    return res
      .status(500)
      .json({ msg: "Something went wrong", details: error });
  }

};

exports.accountsGet = async (req, res) => {
  try {
    const accounts = await Account.find().select(['-createdAt', '-updatedAt']);
    return res.status(200).json(accounts);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Something went wrong", details: error });
  }
};

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
