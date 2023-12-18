<?php
if (empty($_GET['type'])) {
    die('Type is not set');
}

require "config.php";

$type = (int) $_GET['type'];

switch ($type) {
    case 1:
        $result = $conn->query("SELECT * FROM provinces");
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '<option value="' . $row['id'] . '">' . $row['name'] . '</option>';
            }
        }
        break;
    case 2:
        if (empty($_GET['province'])) {
            die('Province is not set');
        }
        $province = (int) $_GET['province'];
        $result = $conn->query("SELECT * FROM municipal WHERE Province_Id = " . $province);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '<option value="' . $row['Municipal_ID'] . '">' . $row['Name'] . '</option>';
            }
        }
        break;
    case 3:
        if (empty($_GET['municipal'])) {
            die('Municipal is not set');
        }

        $municipality = (int) $_GET['municipal'];
        $result = $conn->query("SELECT * FROM barangay WHERE Municipal_id = " . $municipality);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '<option value="' . $row['ID'] . '">' . $row['Name'] . '</option>';
            }
        }
        break;
    default:
        die('Type is not valid');
}