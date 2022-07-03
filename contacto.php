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
                    <h2 class="h2 fs-1 fw-bold text-white">Nuestras redes sociales y ubicación</h2>
                </div>
            </div>
        </div>

        <p class="p fs-3 py-2 bg-secondary text-white text-center m-0">¡Contactanos!</p>

        <div class="container text-center">
            <div class="d-flex justify-content-center flex-column flex-sm-row py-4 gap-2 gap-sm-5 align-items-center">
                <a href="https://www.facebook.com/MerloOptica" target="_blank" class="text-decoration-none">
                    <div class="redes p-3">
                        <img src="./img/facebook.png" alt="Logo Facebook">
                        <p>Facebook</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/merloptica" target="_blank" class="text-decoration-none">
                    <div class="redes p-3">
                        <img src="./img/instagram.png" alt="Logo Instagram">
                        <p>Instagram</p>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5493492281954" target="_blank"
                    class="text-decoration-none">
                    <div class="redes p-3">
                        <img src="./img/whatsapp.png" alt="Logo WhatsApp">
                        <p>WhatsApp</p>
                    </div>
                </a>
            </div>
            <iframe class="mb-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6821.732182253474!2d-61.494769669367756!3d-31.252130113995012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caae45c2216e65%3A0x3e72d28866ef1584!2sOptica%20Merlo!5e0!3m2!1ses!2sar!4v1654484276692!5m2!1ses!2sar"
                width="80%" height="350" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
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
</body>

</html>