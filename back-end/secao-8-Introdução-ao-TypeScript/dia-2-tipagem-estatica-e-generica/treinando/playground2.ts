type TUser = {
  name: string,
  email: string,
  address?: string
}

type TLawyer = {
  oab: string,
} & TUser;

type TMedical = TUser &{
  crm: string,
}


interface IUser {
  name: string,
  email: string,
  address?: string,
}

interface ILawyer extends IUser {
  oab: string,
};

interface ILawyer extends IUser {
  cpf: string,
};

interface IMdeical extends IUser {
  crm: string,
};

const andre: ILawyer = {
  name: 'Andre Soares',
  email: 'andre@mail.com',
  address: 'hfakjsdhfkjh',
  oab: '.....',
  cpf: '....'
};

const thays: Medical = {
  name: 'Thays Costa',
  email: 'thays@mail.com',
  crm: '......'
};

function displayUser(user: IUser) {
  console.log(`name: ${user.name}, email: ${user.email}, address: ${user.address}`);
}


displayUser(andre);
displayUser(thays);