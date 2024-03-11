
const studentInfo = {
    getStudentFullName: function (id) {
        switch (id) {
            case 0:
                return "Nikita Shapoval";
            case 1:
                return "Kacper Nowak";
            case 2:
                return "Maja Kowalska";
            default:
                return "Michał Wiśniewski";
        }
    },
    getStudentId: function (id) {
        switch (id) {
            case 0:
                return "44976";
            case 1:
                return "44657";
            case 2:
                return "44676";
            default:
                return "44767";
        }
    },
};

module.exports = studentInfo;
