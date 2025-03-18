package com.example.myapplication

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.clickable
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.google.firebase.firestore.FirebaseFirestore

@Composable
fun LocationsListScreen(navController: NavController) {
    val db = FirebaseFirestore.getInstance()
    var locations by remember { mutableStateOf(listOf<Location>()) }

    LaunchedEffect(Unit) {
        db.collection("locations")
            .get()
            .addOnSuccessListener { result ->
                val locationList = result.map { document ->
                    Location(
                        name = document.getString("name").orEmpty(),
                        description = document.getString("description").orEmpty(),
                        rating = document.getLong("rating")?.toInt() ?: 0
                    )
                }
                locations = locationList
            }
    }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Locations", style = MaterialTheme.typography.headlineMedium)
        Spacer(modifier = Modifier.height(16.dp))

        locations.forEach { location ->
            LocationItem(location = location, onClick = {
                navController.navigate("mapView/${location.name}")
            })
            Spacer(modifier = Modifier.height(8.dp))
        }

        Button(onClick = { navController.navigate("addLocation") }) {
            Text("Add New Location")
        }
    }
}

@Composable
fun LocationItem(location: Location, onClick: () -> Unit) {
    Card(modifier = Modifier.fillMaxWidth().clickable(onClick = onClick)) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = location.name, style = MaterialTheme.typography.headlineSmall)
            Text(text = location.description, style = MaterialTheme.typography.bodyLarge)
            Text(text = "Rating: ${location.rating}", style = MaterialTheme.typography.bodySmall)
        }
    }
}

data class Location(val name: String, val description: String, val rating: Int)

@Preview(showBackground = true)
@Composable
fun PreviewLocationsListScreen() {

}
