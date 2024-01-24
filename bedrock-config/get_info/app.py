import json
import requests

def lambda_handler(event, context):
    # Print the received event to the logs
    print("Received event: ")
    print(event)

     # Initialize response code to None
    response_code = None

    # Extract the action group, api path, and parameters from the prediction
    action = event["actionGroup"]
    api_path = event["apiPath"]
    try:
        parameters = event["parameters"]
        longitude = parameters[0]["value"]
        latitude = parameters[1]["value"] 
        print(f"Query: {longitude}")
        print(f"Query: {latitude}")

    except:
        print("no location passed")

    try:
        parameters = event["parameters"]
        id = parameters[0]["value"]
        print(f"Query: {id}")

    except:
        print("no id passed")

    try:
        parameters = event["parameters"]
        query = parameters[0]["value"]
        print(f"Query: {query}")

    except:
        print("no id passed")

    inputText = event["inputText"]
    httpMethod = event["httpMethod"]

    print(f"inputText: {inputText}")


    # Check the api path to determine which tool function to call
    if api_path == "/get_all_stations":
        # Call the aws_well_arch_tool from the tools module with the query
        body = get_all_stations(longitude,latitude)
        # Create a response body with the result
        response_body = {"application/json": {"body": str(body)}}
        response_code = 200
    elif api_path == "/get_coordinates":
        # Call the code_gen_tool from the tools module with the query
        body = get_coordinates(query)
        # Create a response body with the result
        response_body = {"application/json": {"body": str(body)}}
        response_code = 200
    elif api_path == "/get_single_station":
        # Call the code_gen_tool from the tools module with the query
        body = get_single_station(id)
        # Create a response body with the result
        response_body = {"application/json": {"body": str(body)}}
        response_code = 200
    elif api_path == "/get_station_average":
        # Call the code_gen_tool from the tools module with the query
        body = get_station_average(id)
        # Create a response body with the result
        response_body = {"application/json": {"body": str(body)}}
        response_code = 200
    else:
        # If the api path is not recognized, return an error message
        body = {"{}::{} is not a valid api, try another one.".format(action, api_path)}
        response_code = 400
        response_body = {"application/json": {"body": str(body)}}

    # Print the response body to the logs
    print(f"Response body: {response_body}")

    # Create a dictionary containing the response details
    action_response = {
        "actionGroup": action,
        "apiPath": api_path,
        "httpMethod": httpMethod,
        "httpStatusCode": response_code,
        "responseBody": response_body,
    }

    # Return the list of responses as a dictionary
    api_response = {"messageVersion": "1.0", "response": action_response}

    return api_response


def get_coordinates(location_name):
    """
    Get reversed coordinates from locationiq.com
    """
    url = f'https://us1.locationiq.com/v1/search?key=pk.29b7edbf29553b4d6a8ec1dd43de13e3&q=${location_name}&format=json'

    response = requests.request("GET", url)
    print(response)
    results = json.loads(response.text)
    print(results)
    return results


def get_all_stations(longitude,latitude):
    """
    Get all Bike Hire Docking Stations from garnet
    """
    url = f'https://r16w0ohr0i.execute-api.eu-west-1.amazonaws.com/ngsi-ld/v1/entities?type=BikeHireDockingStation&options=keyValues&limit=1000&georel=near;maxDistance==500&geometry=Point&coordinates=%5B{longitude},{latitude}%5D'

    payload = {}
    headers = {
    'Link': '<https://raw.githubusercontent.com/smart-data-models/data-models/master/context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    results = json.loads(response.text)
    return results

def get_single_station(id):
    """
    Get a single Bike Hire Docking Station from garnet
    """
    url = f'https://r16w0ohr0i.execute-api.eu-west-1.amazonaws.com/ngsi-ld/v1/entities/{id}?options=keyValues'

    payload = {}
    headers = {
    'Link': '<https://raw.githubusercontent.com/smart-data-models/data-models/master/context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    results = json.loads(response.text)
    return results

def get_station_average(id):
    """
    Get Bike Hire Docking Station average value from garnet
    """
    url = f'https://r16w0ohr0i.execute-api.eu-west-1.amazonaws.com/ngsi-ld/v1/temporal/entities/{id}?aggrMethods=avg&limit=1000'

    payload = {}
    headers = {
    'Link': '<https://raw.githubusercontent.com/smart-data-models/data-models/master/context.jsonld>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    results = json.loads(response.text)
    return results
