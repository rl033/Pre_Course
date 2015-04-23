def non_duplicated_values(values)
  # Write your code here
  return values.find_all {|i| values.count(i) == 1}
end