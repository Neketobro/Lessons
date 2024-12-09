const book = {
    contacts: [
        {
            name: "Serhii",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find: function (name) {
        const result = this.contacts.find(contact => {
            return contact.name.toLowerCase() === name.toLowerCase();
        });
        if (result) {
            return result;
        } else {
            return "Contact not found.";
        }
    },
    add: function (name, phone, email) {
        this.contacts.push({
            name: name,
            phone: phone,
            email: email,
        });
        return;
    },
};

book.add('Nikita', '+380953332211', 'Mail@gmail.com');

console.log(book.find("Serhii"));
