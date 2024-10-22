<?php

class Vehiculo
{
    private $matricula;
    private $marca;
    private $modelo;
    private $estaAlquilado;
    private $tipo;

    public function __construct($matricula, $marca, $modelo, $tipo)
    {
        $this->matricula = $matricula;
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->tipo = $tipo;
        $this->estaAlquilado = false;
    }

    public function mostrarInformacion()
    {
        return "Matrícula: $this->matricula, Marca: $this->marca, Modelo: $this->modelo, Tipo: $this->tipo, Alquilado: " . ($this->estaAlquilado ? 'Sí' : 'No');
    }

    public function alquilar()
    {
        $this->estaAlquilado = true;
    }

    public function devolver()
    {
        $this->estaAlquilado = false;
    }

    public function getTipo()
    {
        return $this->tipo;
    }
}

class Cliente
{
    private $nombre;
    private $apellido;
    private $dni;

    public function __construct($nombre, $apellido, $dni)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->dni = $dni;
    }

    public function getNombreCompleto()
    {
        return "$this->nombre $this->apellido";
    }
}

class ContratoAlquiler
{
    private $vehiculo;
    private $cliente;
    private $fechaRecogida;
    private $fechaDevolucion;
    private $estado;

    public function __construct($vehiculo, $cliente)
    {
        $this->vehiculo = $vehiculo;
        $this->cliente = $cliente;
        $this->fechaRecogida = new DateTime();
        $this->estado = "Activo";
        $vehiculo->alquilar();
    }

    public function devolverCoche()
    {
        $this->fechaDevolucion = new DateTime();
        $this->estado = "Finalizado";
        $this->vehiculo->devolver();
    }

    public function calcularCostoTotal()
    {
        if ($this->estado !== "Finalizado" || !$this->fechaDevolucion) {
            return "El coche no ha sido devuelto aún.";
        }

        $diferencia = $this->fechaDevolucion->diff($this->fechaRecogida);
        $diasAlquilados = $diferencia->days;

        $costoPorDia = 0;
        switch ($this->vehiculo->getTipo()) {
            case 'Sedán':
                $costoPorDia = 50;
                break;
            case 'SUV':
                $costoPorDia = 70;
                break;
            case 'Furgoneta':
                $costoPorDia = 100;
                break;
        }

        return $costoPorDia * $diasAlquilados . "€";
    }
}


$vehiculo1 = new Vehiculo("0044BLY", "Volkswagen", "Golf", "Sedan");
$cliente1 = new Cliente("Miguel", "Fernandez", "18478913T");
$contrato1 = new ContratoAlquiler($vehiculo1, $cliente1);
$contrato1->devolverCoche();
echo $contrato1->calcularCostoTotal();
