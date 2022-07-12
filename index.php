<!DOCTYPE html>
<html lang="es">

<head>
    <?php
        require_once('recursos/head.php');
    ?>
</head>

<body>
    <header>
        <?php
        require_once('recursos/header.php');
        ?>
    </header>
    <main>
        <div class="container-fluid containerPrincipal py-4 px-xs-2 px-sm-5">
            <div class="row">
                <div class="col-12 col-lg-8 pe-lg-5 text-center text-lg-start textoPrincipal scroll-reveal">
                    <h2 class="h2 fs-1 fw-bold text-white">La Óptica que siempre buscaste en Rafaela</h2>
                    <h3 class="h3 fw-light text-white">Especialistas en lentes multifocales, lentes de contacto,
                        anteojos recetados y protectores para sol.</h3>
                </div>
                <div class="col-0 col-lg-4 lentesDivPrincipal text-center">
                    <img class="lentesContainerPrincipal" src="./img/lentes.png" alt="lentes">
                </div>
            </div>
        </div>

        <p class="p fs-3 py-2 bg-secondary text-white text-center">¿Qué estas buscando?</p>

        <div class="container">
            <section class="row lentesOpcion text-center gap-4 gap-lg-0">
                <div class="col-12 col-xs-6 col-lg-6">
                    <a href="filtros">
                        <article class="card cardModificacion" style="width: 100%;">
                            <img src="./img/modelo2.jpg" class="card-img-top w-100 imagenCard" alt="Modelo Lentes"
                                loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title fs-2 fw-bold">LENTES DE RECETA</h5>
                                <p class="card-text fs-5">Contamos con filtros de luz azul, antirreflejos, ambos filtros
                                    combinados, y mucho más.</p>
                            </div>
                        </article>
                    </a>
                </div>

                <div class="col-12 col-xs-6 col-lg-6">
                    <a href="marcas">
                        <article class="card cardModificacion" style="width: 100%;">
                            <img src="./img/modelo1.jpg" class="card-img-top w-100 imagenCard" alt="Modelo Lentes"
                                loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title fs-2 fw-bold">LENTES DE SOL</h5>
                                <p class="card-text fs-5">Contamos con lentes de calidad premium de distintas marcas,
                                    armazones de nylon, metálicos, y mucho más..</p>
                            </div>
                        </article>
                    </a>
                </div>
            </section>

            
            
            <div class="text-center imagenFinal">
                <img src="./img/logo-png.png" alt="">
            </div>
        </div>

        <img src="./img/wave.svg" alt="" class="wave">
    </main>
    <footer>
        <?php
        require_once('recursos/footer.php');
    ?>
    </footer>
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <script src="./index.js"></script>
</body>

</html>