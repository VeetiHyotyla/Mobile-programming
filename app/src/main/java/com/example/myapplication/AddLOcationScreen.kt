package com.example.myapplication

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.google.firebase.firestore.FirebaseFirestore

@Composable
fun AddLocationScreen(navController: NavController) {
    var name by remember { mutableStateOf("") }
    var description by remember { mutableStateOf("") }
    var rating by remember { mutableStateOf("") }

    val db = FirebaseFirestore.getInstance()

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Add New Location", style = MaterialTheme.typography.headlineMedium)
        Spacer(modifier = Modifier.height(16.dp))

        TextField(value = name, onValueChange = { name = it }, label = { Text("Name") })
        Spacer(modifier = Modifier.height(8.dp))

        TextField(value = description, onValueChange = { description = it }, label = { Text("Description") })
        Spacer(modifier = Modifier.height(8.dp))

        TextField(value = rating, onValueChange = { rating = it }, label = { Text("Rating") })
        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = {
            if (name.isNotEmpty() && description.isNotEmpty() && rating.isNotEmpty()) {
                val newLocation = hashMapOf(
                    "name" to name,
                    "description" to description,
                    "rating" to rating.toInt()
                )
                db.collection("locations").add(newLocation)
                navController.popBackStack()
            }
        }) {
            Text("Add Location")
        }
    }
}
