const User = require("../../models/user");
const Address = require("../../models/address");
const Skill = require("../../models/skill");
const Employee = require("../../models/employee");

const { dateToString } = require("../../helpers/date");

const employees = async employeesIds => {
  try {
    const employees = await Employee.find({ _id: { $in: employeesIds } });

    return employees.map(employee => {
      return transformEmployee(employee);
    });
  } catch (error) {
    throw error;
  }
};

const addresses = async addressIds => {
  try {
    const addresses = await Address.find({ _id: { $in: addressIds } });

    return addresses.map(address => {
      return transformAddress(address);
    });
  } catch (error) {
    throw error;
  }
};

const skills = async skillIds => {
  try {
    const skills = await Skill.find({ _id: { $in: skillIds } });

    return skills.map(skill => {
      return transformSkill(skill);
    });
  } catch (error) {
    throw error;
  }
};

// manual population of user creator
const user = async userId => {
  try {
    const user = await User.findById(userId);

    return {
      ...user._doc,
      createdEmployees: employees.bind(this, user._doc.createdEmployees)
    };
  } catch (error) {
    throw error;
  }
};

const transformAddress = address => {
  return {
    ...address._doc
  };
};

const transformSkill = skill => {
  return {
    ...skill._doc
  };
};

const transformEmployee = employee => {
  return {
    ...employee._doc,
    addresses: addresses.bind(this, employee._doc.addresses),
    skills: skills.bind(this, employee._doc.skills),
    createdAt: dateToString(employee._doc.createdAt),
    updatedAt: dateToString(employee._doc.updatedAt)
  };
};

exports.transformEmployee = transformEmployee;
