<?php include('_header1.php') ?>


<form action="outputindex.php" method="post">

    <input class="inputstyle1" type="text" size="30" name="myletter" placeholder="A?" style="text-transform:uppercase" maxlength="1" pattern="[a-zA-Z]"/>

    <input class="inputstyle2" type="text" size="30" name="mynumber" placeholder="#." style="text-transform:uppercase" maxlength="1" pattern="\d*"/>

    <input class="SubmitButton Fill" type="submit" value="+"/>

</form>



<?php include('_footer.php') ?>
