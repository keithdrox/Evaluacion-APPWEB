"use strict";

let productos = [];

const formProducto = document.getElementById('formProducto');
const inputPrecio = document.getElementById('precio');
const inputnombre = document.getElementById('nombre');
const selectcategoria = document.getElementById('categoria');
const descripcion = document.getElementById('descripcion');
const inputbuscar = document.getElementById('buscar');


const mostrarError = (idCampo, mensaje) => {
  const spanError = document.getElementById(`error-${idCampo}`);
  if (spanError) {
    spanError.textContent = mensaje;
    spanError.classList.add('active');
    spanError.parentElement.classList.add('has-error');
  }
};


