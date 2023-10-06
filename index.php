






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My First Time Maintaining a Hacktoberfest Repo">
    <meta property="og:title" content="My First Hacktoberfest Repo">
    <meta property="og:description" content="My First Time Maintaining a Hacktoberfest Repo">
    <meta property="og:image" content="themes/img/social.jpg"> <!-- Replace with the actual image path -->
    <meta property="og:url" content="https://yourwebsite.com">
    <link id="default-css" rel="stylesheet" type="text/css" href="layout.css">
    <link id="theme-css" rel="stylesheet" type="text/css" href="themes/light.css">
    <title>My First Hacktoberfest Repo</title>
</head>
<body>
 <div class="profile-content">  
 <div class="page-main">

    <main>
        <h2>Welcome to my First Hacktoberfest Repo!</h2>
        <p>I created this repository in an effort to learn how to maintain a public respo hands on. So I created this activity as a playground for new students, hacktoberfest first-timers, and experienced contributors that want to help us learn!</p>
<h2>Contribution Objectives</h2>
<p>Your contributions to this project should be significant and challenging "for you" which is very relative to your personal experience. You may be a great Java programmer and terrible at HTML. So I won't be discluding anyone that makes any impactful contribution. Please look at the Code of Conduct and Contribution documents on the repository for general rules and guidelines.</p>
  
            <h3>PR 1 - Create a Page</h3>
            
                <!-- Page Selection Dropdown -->
            <div class="page-selection">
                <label for="page-select">Example Pages:</label>
                <select id="page-select" onchange="changePage()">
                    <option value="">Select A Page</option>
                    <?php
                    $pageFolder = "pages/";
                    $pageFiles = glob($pageFolder . "*.php");
                    foreach ($pageFiles as $pageFile) {
                        $pageFileName = basename($pageFile);
                        echo '<option value="' . $pageFolder . $pageFileName . '">' . $pageFileName . '</option>';
                    }
                    ?>
                </select>
            </div>
                  <h3>PR 2 - Create a Theme</h3>
        
      
                    <!-- Theme Switching Dropdown -->
            <div class="theme-switch">
                <label for="theme-select">Example Themes:</label>
                <select id="theme-select" onchange="changeTheme()">
                    <option value="">Default Theme</option>
                    <?php
                    $themeFolder = "themes/";
                    $themeFiles = glob($themeFolder . "*.css");
                    foreach ($themeFiles as $themeFile) {
                        $themeFileName = basename($themeFile);
                        echo '<option value="' . $themeFile . '">' . $themeFileName . '</option>';
                    }
                    ?>
                </select>
            </div>
               <h3>PR 3 - Fix Issue</h3>
               <h3>PR 4 - Create Enhancement</h3>
    </main>
    <!-- Footer -->
    <footer>
        <p></p>
    </footer>
    <!-- JavaScript -->
    <script src="switch.js"></script>
    <script src="nav.js"></script>
  </div>  </div>
</body>
</html>

