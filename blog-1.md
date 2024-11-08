1. The significance of union and intersection types in Typescript -

Union Type:
Union type is basiclly 'or' operator which has a significent effect on how we code. think it like this: if we want to make a system where super-admin, admin and editor will be able to access a certain function. in that case we will need Union type. It increases code flexibility by providing multiple valid options for a variable type. 
Example: 

// union type
type ValidRole = "super-admin" | "admin" | "editor";

// cheaking and granting 
function haveAccess(role: string) {
    // Check if the role is one of the valid roles
    if (["super-admin", "admin", "editor"].includes(role)) {
        console.log("Confidential File");
    } else {
        console.log("Access denied.");
    }
}

Intersection Type:
Intersection type is quite opposite of the Union type because it will need all the option to be true. 
for example: if you are a father and a programmer you will need to full fill all the required things to be a perfect father and employee = Super Coder Dad.

code:
type Dad = {
    name: string;
    dadSkills: string[];
};

type Programmer = {
    languages: string[];
    codeExperience: number;
};

type SuperCoderDad = Dad & Programmer;

function superCoderDad(person: SuperCoderDad) {
    console.log(`Name: ${person.name}`);
    console.log("Dad Skills:", person.dadSkills.join(", "));
    console.log("Programming Languages:", person.languages.join(", "));
    console.log(`Years of Coding Experience: ${person.codeExperience}`);
}


