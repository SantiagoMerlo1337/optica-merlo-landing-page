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
                <div class="col-12 col-lg-8 pe-lg-5 text-center text-lg-start textoPrincipal">
                    <h2 class="h2 fs-1 fw-bold text-white">Filtros disponibles</h2>
                </div>
            </div>
        </div>

        <p class="p fs-3 py-2 bg-secondary text-white text-center m-0">¡Visitanos en nuestro local con tu receta para
            adquirirlos!</p>

        <section class="container">
            <h3 class="h3 text-white text-center fs-2 py-5 m-0">- FILTROS -</h3>
            <div class="row gap-4 gap-lg-0">
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/antirreflejo.jpg" alt="Antirreflejo"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Antirreflejo</h2>
                            <h3 class="fs-5">Elimina los reflejos de luz producidos artificial o naturalmente que
                                dificultan ver de forma correcta.</h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/luz-azul.jpg" alt="Luz Azul"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Luz Azul</h2>
                            <h3 class="fs-5">Protege la vista de la luz azul que emite las pantallas. </h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/fotocromatico.jpg" alt="Fotocromatico"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Fotocromático</h2>
                            <h3 class="fs-5">Lentes transparentes en interiores, pero se oscurecen al estar en ambientes
                                luminosos.</h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-6 gap-5 m-0 mt-lg-4">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/antirraya.jpg" alt="Laca Antirrayas"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Laca Antirraya</h2>
                            <h3 class="fs-5">¡Protege las lentes de las rayas involuntarias!</h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-6 gap-5 m-0 mt-lg-4">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/adaptec-vuble.jpg" alt="Adaptec Vuble"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Adaptec Vuble</h2>
                            <h3 class="fs-5">Combinación de los siguientes filtros: antirreflejos, luz azul y
                                fotocromático.</h3>
                        </div>
                    </article>
                </div>
            </div>

            <p class="p fst-italic text-center text-white py-3 m-0 fs-5">*Los filtros son combinables*</p>

            <h3 class="h3 text-white text-center fs-2 py-5">- DISTANCIAS FOCALES -</h3>
            <div class="row gap-4 gap-lg-0">
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/monofocal.jpg" alt="Monofocales"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Monofocales</h2>
                            <h3 class="fs-5">Misma graduación en toda su superficie.</h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/bifocal.jpg" alt="Bifocales"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Bifocales</h2>
                            <h3 class="fs-5">Dos graduaciones en las mismas gafas: la de lejos y la de cerca.</h3>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-4 gap-5">
                    <article class="card shadow cardFiltro">
                        <img class="card-img-top imagenCardFiltros" src="./img/multifocal.jpg" alt="Multifocales"
                            loading="lazy">
                        <div class="card-body text-center">
                            <h2 class="fs-3">Multifocales</h2>
                            <h3 class="fs-5">Progresividad en dos graduaciones, permitiendo el enfoque de distancias
                                lejanas, medias y cercanas.</h3>
                        </div>
                    </article>
                </div>
            </div>
        </section>

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
</body>

</html>