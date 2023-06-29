////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();

//////CONTROLLERS
const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

////////////////Requisições HTTP Principal /////////////////////
router.get("/", (req, res) => {
  return res.json({ message: "Livraria" });
})
////////////////Requisições HTTP Usuario /////////////////////

//POST - CADASTRAR
router.post("/add_funcionario", funcionarioController.FuncionarioCreate);
//GET - LISTAR
router.get("/funcionarios/:id?", funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);

////////////////////////PRODUTOS/////////////////////////////

//POST - CADASTRAR
router.post("/add_livros", livroController.LivroCreate);
//GET - LISTAR
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router; 