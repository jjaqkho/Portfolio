<?php include('_header2.php') ?>


<?php
$myletter=$_POST['myletter'];
$mynumber=$_POST['mynumber'];
$myletter = strtoupper($myletter);
$pageTitle = $myletter .   "&nbsp + &nbsp"   . $mynumber;
?>

<?php

?>

<!-- MY LETTER -->
<?php

// blank space responses

if ($myletter == '' || $mynumber == '') {

echo "<p class='error1'>Please enter a letter on the left</p>";
$mynumber = "A";
echo "<p class='error2'>Please enter a number on the right</p>";
$myletter = "0";

} else if ($myletter == '' && $mynumber == '') {

echo "<p class='error1'>Please enter a letter on the left</p>";
$mynumber = "A";
echo "<p class='error2'>Please enter a number on the right</p>";
$myletter = "0";

} else if ($myletter == 'a' || $myletter == 'A') {

  echo "<p class='textquestion'>
  What the fuck was that?
  </p>";

} else if ($myletter == 'b' || $myletter == 'B') {

  echo "<p class='textquestion'>
  My apologies Professor, <br /> but I couldn’t complete my homework because of
  </p>";

} else if ($myletter == 'c' || $myletter == 'C') {

  echo "<p class='textquestion'>
  The perfect recipe to obliterate a relationship?
  </p>";

} else if ($myletter == 'd' || $myletter == 'D') {

  echo "<p class='textquestion'>Maybe she’s born with it.
  <br /> Maybe it’s
  </p>";

} else if ($myletter == 'e' || $myletter == 'E') {

  echo "<p class='textquestion'>
  How did I lose my virginity?
  </p>";

} else if ($myletter == 'f' || $myletter == 'F') {

  echo "<p class='textquestion'>
  What made me <br /> vote for Trump?
  </p>";

} else if ($myletter == 'g' || $myletter == 'G') {

  echo "<p class='textquestion'>
  What kept Margaret Thatcher busy in her waning years?
  </p>";

} else if ($myletter == 'h' || $myletter == 'H') {

  echo "<p class='textquestion'>
  When I caress my partner, I like to <br /> think about
  </p>";

} else if ($myletter == 'i' || $myletter == 'I') {

  echo "<p class='textquestion'>
  What did the US airdrop to the children of Afghanistan?
  </p>";

} else if ($myletter == 'j' || $myletter == 'J') {

  echo "<p class='textquestion'>
  Next from J.K. Rowling: <br />
  Harry Potter and the Chamber of
  </p>";

} else if ($myletter == 'k' || $myletter == 'K') {

  echo "<p class='textquestion'>I drink to forget</p>";

} else if ($myletter == 'l' || $myletter == 'L') {

  echo "<p class='textquestion'>___________ <br />
  kid-tested,
  <br />
  mother-approved.
  </p>";

} else if ($myletter == 'm' || $myletter == 'M') {

  echo "<p class='textquestion'>American election,
  </p>";

} else if ($myletter == 'n' || $myletter == 'N') {

  echo "<p class='textquestion'>
  Hey baby, <br />
  come here and I’ll show you
  </p>";

} else if ($myletter == 'o' || $myletter == 'O') {

  echo "<p class='textquestion'>
  Puberty is a time of change. <br /> You might notice hair growing in new places. <br /> You might develop an interest in ___________. <br /> This is normal.
  </p>";

} else if ($myletter == 'p' || $myletter == 'P') {

  echo "<p class='textquestion'>
  Instead of coal, <br />
  Santa now gives the bad children
  </p>";

} else if ($myletter == 'q' || $myletter == 'Q') {

  echo "<p class='textquestion'>
  Honey, <br />
  Mommy & Daddy love you very much. <br />
  But apparently Mommy loves ___________ <br />
  more than she loves Daddy.
  </p>";

} else if ($myletter == 'r' || $myletter == 'R') {

  echo "<p class='textquestion'>
  In a world ravaged by the female orgasm, <br /> our only solace is
  </p>";

} else if ($myletter == 's' || $myletter == 'S') {

  echo "<p class='textquestion'>
  Next time on Dr. Phil: <br />
  How to talk to your child about
  </p>";

} else if ($myletter == 't' || $myletter == 'T') {

  echo "<p class='textquestion'>
  Studies show that white people <br /> navigate mazes 50% faster after being exposed to
  </p>";

} elseif ($myletter == 'u' || $myletter == 'U') {

  echo "<p class='textquestion'>
  What helps Clinton unwind?
  </p>";

} else if ($myletter == 'v' || $myletter == 'V') {

  echo "<p class='textquestion'>
  In the White House, <br /> there are whisperings <br /> that the President has a secret room devoted to
  </p>";

} else if ($myletter == 'w' || $myletter == 'W') {

  echo "<p class='textquestion'>
  What gets better with drugs?
  </p>";

} else if ($myletter == 'x' || $myletter == 'X') {

  echo "<p class='textquestion'>
  What brought my grades down?
  </p>";

} else if ($myletter == 'y' || $myletter == 'Y') {

  echo "<p class='textquestion'>
  Here is The New School <br />
  Here is the hall <br />
  Open the doors <br />
  And there is
  </p>";

} else if ($myletter == 'z' || $myletter == 'Z') {

  echo "<p class='textquestion'>It’s not xenophobia,
  <br />
  it’s
  </p>";

} else {

echo "<p class='error1'>Please enter a letter on the left</p>";
$mynumber = "A";

}
?>




<!-- MY NUMBER -->
<?php

if ($mynumber == '1') {

  echo "<p class='textanswer'>
  ;) &nbsp Winking at old people.
  </p>";

} else if ($mynumber == '2') {

  echo "<p class='textanswer'>
  Beyoncé. &nbsp &nbsp &nbsp
  </p>


  <img src='Beyonce.gif' alt='Beyonce' class='img7'>";

} else if ($mynumber == '3') {

  echo "<p class='textanswer'>
  Unfathomable stupidity.
  </p>

  <img src='Stupidity.gif' alt='Stupidity' class='img2'>";

} else if ($mynumber == '4') {

  echo "<p class='textanswer'>
  The Make-A-Wish Foundation. &nbsp &nbsp
  </p>

  <img src='ShootingStar.gif' alt='ShootingStar' class='img1'>";

} else if ($mynumber == '5') {

  echo "<p class='textanswer'>
  Hormone Injections. &nbsp &nbsp &nbsp &nbsp
  </p>

  <img src='Needle.gif' alt='Needle' class='img3'>";

} else if ($mynumber == '6') {

  echo "<p class='textanswer'>
  Menstrual Cycle.
  </p>";

} else if ($mynumber == '7') {

  echo "<p class='textanswer'>
  Trump &nbsp &nbsp &nbsp
  </p>

  <img src='Trump.gif' alt='Trump' class='img6'>";

} else if ($mynumber == '8') {

  echo "<p class='textanswer goblin'>
  Goblins. &nbsp &nbsp
  </p>

  <img src='Goblins.gif' alt='Goblins' class='img4'>";

} else if ($mynumber == '9') {

  echo "<p class='textanswer'>
  Pac-Man uncontrollably guzzling cum.
  </p>

  <img src='Pacman.gif' alt='Pacman' class='img5'>";

} else if ($mynumber == '0') {

  echo "<p class='textanswer'>
  Amput &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
  </p>
  <span>ees</span>";

} else if ($mynumber == ' ') {

  echo "<p class='error2'>Please enter a number on the right</p>";
  $myletter = "0";

} else {

  echo "<p class='error2'>Please enter a number on the right</p>";
  $myletter = "0";

}

?>

<div class="BackButton"><a href="inputindex.php" class="homepagelink Fill">
  &#8634
</a></div>



<?php include('_footer.php') ?>





<?php
$pageContents = ob_get_contents (); // Get all the page's HTML into a string
ob_end_clean (); // Wipe the buffer

// Replace <!--TITLE--> with $pageTitle variable contents, and print the HTML
echo str_replace ("Title", $pageTitle, $pageContents);
?>
