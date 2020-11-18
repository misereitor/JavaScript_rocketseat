var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
for (let value of usuarios){
    console.log(`O ${value.nome} possue as Habilidade: ${value.habilidades}`)
}
