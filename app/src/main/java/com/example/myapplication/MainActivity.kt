package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.myapplication.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                val navController = rememberNavController()
                MainNavHost(navController = navController)
            }
        }
    }
}

@Composable
fun MainNavHost(navController: NavHostController) {
    NavHost(navController = navController, startDestination = "locationsList") {
        composable("locationsList") {
            LocationsListScreen(navController = navController)
        }
        composable("addLocation") {
            AddLocationScreen(navController = navController)
        }
        composable("mapView/{locationName}") { backStackEntry ->
            val locationName = backStackEntry.arguments?.getString("locationName")
            MapViewScreen(locationName = locationName ?: "", navController = navController)
        }
    }
}
